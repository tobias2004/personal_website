---
name: Shell
summary: Custom-built Shell application in C
githublink: https://github.com/tobias2004
techstack: ["C", "C++", "UNIX"]
image: /shell.png
---

---

## Check It Out
🌐 [On Github](www.github.com/tobias2004)

---

## About

This project is a fully functional Unix-like shell written in C. It supports process execution, signal handling, and input/output redirection — all constructed from scratch. Inspired by classic CLI environments, it replicates much of the behavior seen in shells like `bash` and `sh`, while adding custom features like PID expansion and foreground-only toggling.

My main goal with this project was to gain low-level experience working with the POSIX API, including process control, signals, and file descriptors. Writing everything manually — from memory management to command tokenization — helped me deeply understand how shells work under the hood.

---

## How I Built It

- **Language & Tools**: C (with POSIX headers), `gcc`, `valgrind` for memory safety, and a terminal for testing.
- **Custom Lexer & Parser**: I developed a lexer and parser by hand. The lexer handles quotation marks and filters I/O redirection, pipe, and background operators. The parser processes the output from the lexer and creates an Abstract Syntax Tree (AST), allowing efficient and organized execution of the user's command.
- **Signal Handling**:
  - Used `sigaction()` to handle `SIGTSTP` (`Ctrl+Z`) for toggling foreground-only mode.
  - Foreground processes are interruptible via `SIGINT` (`Ctrl+C`), while the shell ignores it.
- **Execution Model**:
  - Forks child processes for external commands.
  - Handles input/output redirection using `dup2()` and `open()`.
  - Tracks background processes in a linked list and reaps zombies with `waitpid()` using `WNOHANG`.

---

## Features

- **Built-in Commands**: Supports `cd`, `status`, and `exit` internally.
- **PID Expansion**: Substitutes `$$` with the current shell's process ID.
- **Foreground/Background Execution**: Uses `&` to send jobs to the background; toggle-safe with `SIGTSTP`.
- **Signal-Safe Behavior**: Shell and children handle `SIGINT`/`SIGTSTP` differently for robust control.
- **Redirection Support**: Clean redirection of STDIN and STDOUT with file fallback for background jobs.
- **Memory Management**: Manual `malloc()` and `free()` for every structure, with clean shutdown logic.
- **Zombie Reaping**: Non-blocking cleanup of completed background jobs to avoid defunct processes.
