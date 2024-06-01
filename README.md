# Code Commenter Tool

## Overview

This tool automatically generates comments for your code files. By specifying a source directory, the tool recursively scans all files and directories, excluding those specified in the `.exclude` file or predefined paths. The commented files are then saved into a specified destination directory (`./Generated/`). [Example](https://x.com/Tanmay11117/status/1796344581426118729)

## Features

- **Recursive File Processing**: Scans all files within the source directory, including subdirectories.
- **File Exclusion**: Automatically excludes specified files and directories.

## Installation

1. Ensure Node.js is installed.
3. Run:

    ```sh
    npx auto-commentor
    ```

## Usage

1. Create a `.exclude` file listing files or directories to be excluded.
```
node_modules
index.html
```

 ```sh
 npx auto-commentor
```
