import { defineConfig } from "tinacms";

export default defineConfig({
branch: "main",
clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
token: process.env.TINA_TOKEN,
build: {
outputFolder: "admin",
publicFolder: "public",
},
media: {
tina: {
mediaRoot: "uploads",
publicFolder: "public",
},
},
schema: {
collections: [
{
name: "page",
label: "Pages",
path: "content/pages",
format: "json",
fields: [
{
type: "string",
name: "heroTitle",
label: "Hero Title",
},
{
type: "string",
name: "heroSubtitle",
label: "Hero Subtitle",
},
{
type: "image",
name: "heroImage",
label: "Hero Image",
},
{
type: "object",
list: true,
name: "retreats",
label: "Retreat Options",
fields: [
{ type: "string", name: "title", label: "Title" },
{ type: "string", name: "description", label: "Description" },
],
},
],
},
],
},
});