# ged-parser
Parse GEDCOM files for [rpreiner/tam](https://github.com/rpreiner/tam)
This has become redundant as the original webapp now supports .ged files.

This Node.js module uses [gedcom-d3](https://github.com/mister-blanket/gedcom-d3) to parse GEDCOM files and prepare them to be used in rpreiner/tam.

## Usage
`npm test` to run an example.

`[d3Data, missingBirthdates] = gedParse(data);` gives you the parsed data and a list of people with missing birthdates in the form of:
```JS
[
  [ '@I11@', 'Freddie Mac', '?' ],
  [ '@I7@', 'Marie Mustermann', '(betw. 1970 and 1977)' ]
]
```
with the persons `id`, `name` and `DOB`.
