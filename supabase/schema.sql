create table public.projects (
  id uuid not null default gen_random_uuid(),
  image text not null,
  title text not null,
  description text not null,
  "productEngineering" text not null,
  technologies text[] not null,
  "liveUrl" text null,
  constraint projects_pkey primary key (id)
);

-- Allow anyone visiting your site to read the projects
create policy "Public can view projects"
on public.projects for select
to public
using (true);

-- Allow only authenticated users to insert, update, or delete projects
create policy "Admins can manage projects"
on public.projects for all
to authenticated
using (true)
with check (true);