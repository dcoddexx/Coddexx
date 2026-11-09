import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import {
  getProject,
  createProject,
  updateProject,
  deleteProject,
  uploadProjectImage,
} from "../service/projectService";
import { type ProjectTypes } from "../types/projectTypes";

export const Admin = () => {
  const navigate = useNavigate();

  // Project List State
  const [projectsList, setProjectsList] = useState<ProjectTypes[]>([]);
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>("");

  // Form Field State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [productEngineering, setProductEngineering] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  // UI Status State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Load existing projects on page mount
  const fetchAllProjects = async () => {
    try {
      const data = await getProject();
      setProjectsList(data);
    } catch (err: any) {
      setError("Failed to fetch project list.");
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  // Populate form fields to enter Edit Mode
  const handleStartEdit = (project: ProjectTypes) => {
    setEditingId(project.id);
    setTitle(project.title);
    setDescription(project.description);
    setProductEngineering(project.productEngineering);
    setTechnologies(project.technologies.join(", "));
    setLiveUrl(project.liveUrl ?? "");
    setCurrentImageUrl(project.image);
    setImageFile(null);
    setError(null);
    setSuccess(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset form back to Create Mode
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
    setProductEngineering("");
    setTechnologies("");
    setLiveUrl("");
    setImageFile(null);
    setCurrentImageUrl("");
  };

  // Log Out Handler
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };

  // Delete Handler
  const handleDelete = async (id: string | number) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      setSuccess("Project deleted successfully.");
      fetchAllProjects();
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Unified Submit Handler (Create vs. Update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      let imageUrl = currentImageUrl;

      // 1. If a new image was chosen, upload it first
      if (imageFile) {
        imageUrl = await uploadProjectImage(imageFile);
      } else if (!editingId) {
        throw new Error("Please select an image file for a new project.");
      }

      // 2. Parse technologies string array
      const techArray = technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech.length > 0);

      const projectData = {
        title,
        description,
        productEngineering,
        technologies: techArray,
        image: imageUrl,
        liveUrl,
      };

      // 3. Execute Update or Create based on editingId state
      if (editingId) {
        await updateProject(editingId, projectData);
        setSuccess("Project updated successfully!");
      } else {
        await createProject(projectData);
        setSuccess("Project created successfully!");
      }

      resetForm();
      fetchAllProjects();
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-bg text-text p-6 md:p-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b border-line pb-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted text-sm mt-1">
            {editingId
              ? "Edit existing project"
              : "Add new project to portfolio"}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/30 rounded hover:bg-red-500/20 text-sm font-medium transition-colors"
        >
          Log Out
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-line/5 p-6 rounded-lg border border-line"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {editingId ? "Editing Project" : "Create New Project"}
          </h2>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="text-xs text-muted hover:text-text underline"
            >
              Cancel Edit
            </button>
          )}
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-500/10 border border-green-500 text-green-400 p-3 rounded text-sm">
            {success}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">
            Project Title
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2.5 bg-bg border border-line rounded text-text focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            required
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2.5 bg-bg border border-line rounded text-text focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Product Engineering Focus
          </label>
          <input
            type="text"
            required
            value={productEngineering}
            onChange={(e) => setProductEngineering(e.target.value)}
            className="w-full p-2.5 bg-bg border border-line rounded text-text focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Technologies (comma-separated)
          </label>
          <input
            type="text"
            required
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            className="w-full p-2.5 bg-bg border border-line rounded text-text focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Live URL / Repository
          </label>
          <input
            type="url"
            required
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            className="w-full p-2.5 bg-bg border border-line rounded text-text focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Cover Image{" "}
            {editingId && "(Optional: leave blank to keep current image)"}
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full p-2 bg-bg border border-line rounded text-text file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-accent file:text-bg file:font-semibold"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-accent text-bg font-semibold rounded hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          {isSubmitting
            ? "Processing..."
            : editingId
              ? "Update Project"
              : "Create Project"}
        </button>
      </form>

      {/* Existing Projects List */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Manage Existing Projects</h2>
        <div className="space-y-4">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between p-4 bg-line/5 border border-line rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-16 h-16 object-cover rounded border border-line"
                />
                <div>
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-xs text-muted">
                    {project.productEngineering}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleStartEdit(project)}
                  className="px-3 py-1.5 bg-accent/10 text-accent border border-accent/30 rounded text-sm hover:bg-accent/20"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="px-3 py-1.5 bg-red-500/10 text-red-400 border border-red-500/30 rounded text-sm hover:bg-red-500/20"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
