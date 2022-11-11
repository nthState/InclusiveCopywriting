# BadWords javascript action

This action will scan your source code and report files containing bad words

## Inputs

### `src`

**Required** The path to scan

### `words`

**Required** A comma delimited list of bad words you want to find

## Outputs

### `files`

A list of files that contain bad words

## Example usage

```yaml
- name: Run Unit Tests
        uses: nthState/BadWords@v1
        with:
          src: './docs'
          words: 'simply, simple, easily, obviously, obvious, he, she, just, blacklist, whitelist, master, slave'
          fileTypeFilter: '.md'
```