Latest work is on `fix-gulp` branch.

To install and view the latest code:

1. Clone the repo
2. Navigate into cloned repo
3. `git checkout fix-gulp` (branch with code after Mac error was fixed)
4. Install node.js (if not already installed) -- this step is only necessary if you will modify code
5. `npm install` -- this step is only necessary if you will modify code
6. `python -m SimpleHTTPServer`

The page should be running on `http://localhost:8000/`

To make changes and re-minify, type `gulp` in the command line. Then make changes.
The code shold be updated automatically.

If you encounter this error "Error: EMFILE, open <path-to-package.json>",
add this to your .bashrc or .bashprofile:

`ulimit -n 2560`

and restart the terminal.
