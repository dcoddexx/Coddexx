import { supabase } from "../lib/supabase";
import { type ProjectTypes } from "../types/projectTypes";

// THIS FUNCTION HANDLES MY DATA FETCHING LOGIC
export async function getProject(): Promise<ProjectTypes[]> {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data as ProjectTypes[];
}

export async function uploadProjectImage(file: File): Promise<string> {
  // Generate a unique filename using timestamp to avoid collisions
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `projects/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("project-images")
    .upload(filePath, file);

  if (uploadError) {
    throw new Error(`Image upload failed: ${uploadError.message}`);
  }

  // Get the public URL for the newly uploaded file
  const { data } = supabase.storage
    .from("project-images")
    .getPublicUrl(filePath);

  return data.publicUrl;
}

// 2. Insert new project record into the database
export async function createProject(
  newProject: Omit<ProjectTypes, "id">,
): Promise<ProjectTypes> {
  const { data, error } = await supabase
    .from("projects")
    .insert([newProject])
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create project: ${error.message}`);
  }

  return data as ProjectTypes;
}

// 3. Update an existing project record
export async function updateProject(
  id: string | number,
  updatedProject: Partial<ProjectTypes>,
): Promise<ProjectTypes> {
  const { data, error } = await supabase
    .from("projects")
    .update(updatedProject)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to update project: ${error.message}`);
  }

  return data as ProjectTypes;
}

// 4. Delete a project record
export async function deleteProject(id: string | number): Promise<void> {
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) {
    throw new Error(`Failed to delete project: ${error.message}`);
  }
}
