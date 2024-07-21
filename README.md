## greeting-cli

Cli tool to welcome you

### Usage

- accept a `--name` or `-n` argument for the name

```
// input
$ node index.js -n Narek

// output
$ Hello Narek!

```

- accept a `--level` or `-l` argument to specify the verbosity level (1, or 2)

```
// input
$ node index.js --level 2

// output
$ Hello guest ( Date and Time: 2024-01-01 12:34:56)
```

- accept an optional `--greeting` or `-g` argument for a custom greeting message

```
// input
$ node index.js --greeting 2

// output
$ Hey, welcome to Node js school
```

- accept optional `--language` or `-l`, default language is English, but you can switch it to Russian or Armenian

```
// input
$ node index.js -l arm

// output
$ Ողջույն հյուր
```

- for more information use `-help` or `-h`
