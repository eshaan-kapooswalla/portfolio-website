#!/bin/bash

# commit_automation.sh
# Script to generate backdated commits for a realistic contribution graph

set -e

# Directory for dummy files
WORK_DIR="dummy_commits"

# Create working directory if it doesn't exist
if [ ! -d "$WORK_DIR" ]; then
  mkdir "$WORK_DIR"
  echo "Created working directory: $WORK_DIR"
else
  echo "Working directory already exists: $WORK_DIR"
fi

# Check if inside a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "Error: Not inside a git repository."
  exit 1
fi

# Array of realistic commit messages
COMMIT_MESSAGES=(
  "fix: correct typo in documentation"
  "feat: add initial project structure"
  "refactor: improve code readability"
  "docs: update README with usage instructions"
  "chore: update dependencies"
  "feat: implement basic feature logic"
  "test: add unit tests for new feature"
  "style: reformat code with linter"
  "fix: resolve edge case in logic"
  "perf: optimize file processing speed"
  "chore: clean up unused files"
  "docs: add code comments for clarity"
  "feat: add error handling"
  "refactor: modularize utility functions"
  "fix: address bug in input validation"
  "chore: update .gitignore"
  "feat: add support for new option"
  "docs: clarify setup steps"
  "test: improve test coverage"
  "style: update formatting for consistency"
  "fix: patch security vulnerability"
  "feat: add configuration file"
  "refactor: simplify logic flow"
  "chore: bump version number"
  "docs: add contribution guidelines"
  "fix: handle null values gracefully"
  "feat: implement logging"
  "test: add integration tests"
  "style: remove trailing whitespace"
  "chore: update license year"
  "docs: add API documentation"
  "fix: correct file permissions"
  "feat: add CLI support"
  "refactor: extract helper methods"
  "chore: remove deprecated code"
  "docs: update changelog"
  "fix: resolve merge conflict markers"
  "feat: add user input validation"
  "test: mock external dependencies"
  "style: standardize variable names"
  "chore: update project metadata"
)

# Function to get a random commit message
get_random_commit_message() {
  local size=${#COMMIT_MESSAGES[@]}
  local index=$((RANDOM % size))
  echo "${COMMIT_MESSAGES[$index]}"
}

# Date range for commits
START_DATE="2024-09-06"
END_DATE="2025-01-05"

# Helper: convert date to epoch
function date_to_epoch() {
  date -jf "%Y-%m-%d" "$1" +%s
}

# Helper: convert epoch to date
function epoch_to_date() {
  date -jf "%s" "$1" +"%Y-%m-%d"
}

# Generate a list of all dates in the range
ALL_DATES=()
current_epoch=$(date_to_epoch "$START_DATE")
end_epoch=$(date_to_epoch "$END_DATE")
while [ "$current_epoch" -le "$end_epoch" ]; do
  ALL_DATES+=("$(epoch_to_date "$current_epoch")")
  current_epoch=$((current_epoch + 86400))
  # 86400 seconds in a day
done

# Shuffle dates for randomness
shuffled_dates=($(printf "%s\n" "${ALL_DATES[@]}" | shuf))

# Track commit counts per day
declare -A COMMITS_PER_DAY

# Function to get a random date/time, max 2 per day
get_random_datetime() {
  for date in "${shuffled_dates[@]}"; do
    count=${COMMITS_PER_DAY[$date]:-0}
    if [ "$count" -lt 2 ]; then
      # Random hour/minute/second
      hour=$((RANDOM % 24))
      min=$((RANDOM % 60))
      sec=$((RANDOM % 60))
      printf "%s %02d:%02d:%02d" "$date" "$hour" "$min" "$sec"
      COMMITS_PER_DAY[$date]=$((count + 1))
      return
    fi
  done
  echo ""
}

# Placeholder for next stages
# ... existing code ... 