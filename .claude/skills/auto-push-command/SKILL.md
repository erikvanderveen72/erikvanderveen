---
name: auto-push-command
description: >
  Automatically provides the full git terminal command after any file changes to a project.
  Triggers on: ANY file edit, code change, site update, or modification to project files.
  This skill ensures the user always gets the ready-to-paste terminal command to commit and push
  their changes, without having to ask for it. ALWAYS activate this skill after making changes
  to files in a git repository — even small ones.
---

# Auto Push Command

After making ANY changes to files in a project (edits, new files, deletions, updates), always end your response with the full terminal command the user needs to commit and push those changes.

## Rules

1. Always provide the command as a single copy-pasteable line using `&&` to chain commands
2. Always use the **full absolute path** to the project directory (never use `~` shorthand)
3. Use `git add .` to stage all changes
4. Write a short, descriptive Dutch or English commit message summarizing what changed
5. Include `git push` at the end

## Format

End every response where files were changed with:

```bash
cd /full/path/to/project && git add . && git commit -m "beschrijving van de wijzigingen" && git push
```

## Example

If you edited files in `/Users/erikvanderveen/erikvanderveen`:

```bash
cd /Users/erikvanderveen/erikvanderveen && git add . && git commit -m "Downloadknop mobiel gefixt, ChatGPT cheatsheet toegevoegd" && git push
```

## Important

- Never skip this step, even for tiny changes
- Never use relative paths or `~`
- The user wants to copy-paste this directly into their Mac terminal while you work on the next thing
