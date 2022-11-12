# InclusiveCopywriting javascript action

This action will scan your source code and report files containing non-inclusive words

## Inputs

### `include_paths`

**Required** A comma delimited list of paths/files to scan

### `exclude_words`

**Required** A comma delimited list of bad words you want to find

### `fileTypeFilter`

A comma delimited list of file types to scan

### `warnings_as_errors`

If a file is found to contain non-inclusive words, should we report that as an error?

## Outputs

### `files_with_errors`

A list of files that contain non-inclusive words

## Example usages

```yaml
- name: Check for non-inclusive words
        uses: nthState/InclusiveCopywriting@v1
        with:
          include_paths: './docs'
          exclude_words: 'simply, simple, easily, obviously, obvious, he, she, just, blacklist, whitelist, master, slave'
          fileTypeFilter: '.md'
```

```yaml
- name: Check for non-inclusive words
        uses: nthState/InclusiveCopywriting@v1
        with:
          include_paths: 'README.md, ./docs'
          exclude_words: 'simply, simple, easily, obviously, obvious, he, she, just, blacklist, whitelist, master, slave'
          fileTypeFilter: '.md, .txt'
          warnings_as_errors: false
```
