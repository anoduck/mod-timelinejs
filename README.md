# Hinode Module - Timelinejs3

<!-- Tagline -->
<p align="center">
    <b>Hinode module for adding a more dynamic and robust timeline with KnightLab's TimelineJS3</b>
    <br />
</p>

<!-- Badges -->
<p align="center">
    <a href="https://gohugo.io" alt="Hugo website">
        <img src="https://img.shields.io/badge/generator-hugo-brightgreen">
    </a>
    <a href="https://gethinode.com" alt="Hinode theme">
        <img src="https://img.shields.io/badge/theme-hinode-blue">
    </a>
    <a href="https://github.com/anoduck/mod-timelinejs/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/anoduck/mod-timelinejs.svg">
    </a>
    <a href="https://github.com/anoduck/mod-timelinejs/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/anoduck/mod-timelinejs.svg">
    </a>
    <a href="https://github.com/anoduck/mod-timelinejs/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/anoduck/mod-timelinejs.svg">
    </a>
    <a href="https://github.com/anoduck/mod-timelinejs/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/anoduck/mod-timelinejs">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

---

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a
[template][repository_template], and a [main theme][repository]. This repository maintains a Hugo module  to add
[Knight-Lab's timelinejs](https://github.com/NUKnightLab/TimelineJS3) features to a Hinode site. Visit the Hinode
documentation site for [installation instructions][hinode_docs].

## Setup and Usage

Below is a brief synopsis of how to install, configure, and use the module.

### Dependencies

You will need to add the module to the Hugo configuration file in your configuration directory
`config/_default/hugo.toml`. 

```toml
[[module.imports]]
    path = "github.com/anoduck/mod-timelinejs"
```

Then you will need to install the [TimelineJS package](https://www.npmjs.com/package/@knight-lab/timelinejs) for Node.js
as a development dependency. This is because the library needs to be present as part of the build process, and not only
for the runtime.

```bash
npm i --save-dev @knight-lab/timelinejs
```

Once this is done, you should be ready to configure the module for use.

### Configuration

This module has relatively no required configuration except what needs to be done for proper usage. 

#### Enable Debugging

The exception to the above statement would be if the user desires or needs to enable debugging. At which point, an
additional configuration parameter will be required in the site parameter file located in the configuration directory
`config/_default/params.toml`. 

```toml
[params.modules.timelinejs]
  debug = true
```

By default, this variable is set to false. This will generate copious amounts of output.

### Generating Your TimelineJS Data Source

TimelineJS accepts timeline data from two different source types.

1. A Google Sheets Spreadsheet
2. A Formatted JSON File

This module was created with the specific intent to allow the user to choose between either of these two source types.
Either of these two source types can be used, the shortcode will remain the same.

#### Google Sheets Spreadsheet

Of the two options available, by far, using a Google Sheets Spreadsheet is the easiest to work with. To get started
simply use [Knight-Lab's own Template
File](https://docs.google.com/spreadsheets/d/1pHBvXN7nmGkiG8uQSUB82eNlnL8xHu6kydzH_-eguHQ/copy). Once you are ready to
use the spreadsheet in your site strictly follow step 2 in Knight-Labs instructions for [making a
timeline](https://timeline.knightlab.com/#make).

>[!WARNING]
> Do not proceed past step #2, because we follow a different convention than the remainder of the instructions.

Below is an example of a Google Sheets Spreadsheet public URL. Unfortunately, the exact path to each spreadsheet
variates slightly, but it is still easy to identify a proper URL. The important thing to take notice of is the ending
path of `pubhtml`, which means the URL references a spreadsheet that is shared publicly.

You will use the entire URL in the shortcode for your timeline element.

```text
https://docs.google.com/spreadsheets/u/1/d/1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk/pubhtml
```

#### JSON File

If it is preferred to use a JSON file, you will need to place it in the `static` dir, because it will not be parsed by
Hugo, but rather by the TimelineJS Javascript. As with most JSON files, the format must be strictly followed.
Information on the paticularities of the JSON format can be found on on [Knight-Lab's
webiste](https://timeline.knightlab.com/docs/json-format.html).

To make creation and modification of the JSON file easier, effort was invested to create [a primitive JSON
schema](https://anoduck.github.io/) to aid in validation and completion. To use it, simply add the schema keyword
followed by the URL of the schema to the top of the JSON file after the first bracket. 

>[!NOTE]
> The Schema has passed validation, but had not been thoroughly tested yet.

```json
{
    "$schema": "https://anoduck.github.io/timelinejs-json-schema/timelinejs.schema.json",
    "title": {
    "media": {
        "url": "http://www.germuska.com/salzburg-album/full/2QVB_022.jpg",
        "caption": "The secret passage at Schloss Leopoldskron, Salzburg, Austria",
        "credit": "Joe Germuska"
    }
}
```

### Usage

With all of the above out of the way, you should be ready to use the module. Which is very beneficial, as your's truly is
running out of steam.

#### Frontmatter

For usage, it is necessary to designate the module in the frontmatter of the page you desire to render the timeline on.
This will allow it to load properly for the page.

```markdown
title: Test page
description: Page to test TimelineJS module.
date: 2023-07-10
modules: timelinejs
---
```

#### Shortcodes

The shortcode itself takes two arguments; `blockID` and `tlData`. 

The explanation for the existence of the `blockID` argument iss due to the original intent was to allow the use to have
more than one timeline element on the page if so desired, but in the latter portion of the development process it became
apparent this would make proper development unnecessarily difficult. So, this parameter should be used, but is not
necessarily a requirement, and if left off the shortcode, should not cause an error.

The `tlData` argument is rather self explanatory, as it defines the source of the data to be used in the generation of
the timeline element. As previously stated this can be either a Google Sheet Spreadsheet or a JSON file.

| Shortcode Argument        | Default            | Description                                         |
|---------------------------|--------------------|-----------------------------------------------------|
| blockId                   | "timeline-content" | The "id" attribute assigned to the timeline.        |
| tlData                    | "timelinejs.json"  | The JSON file or Google Sheet containing event data |

The shortcode can be used with the following labeled arguments, or without them as positional arguments. (...I think.)

```html
{{< timelinejs blockId="timeline-element" tlData="/timelinejs.json" >}}
<!-- or -->
{{< timelinejs "timeline-element" "/timelinejs.json" >}}
```

##### Google Sheets Spreadsheet Example

Using the shortcode in this manner is fairly straight forward. Just use the public URL of the spreadsheet in the
`tlData` argument.

````markdown

{{< timelinejs blockId="timeline-id" tlData="https://docs.google.com/spreadsheets/u/1/d/1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk/pubhtml" >}}

```

##### JSON File Example

Below is an example of using the shortcode with a JSON file. Due to JSON files not considered to be a "content" resource,
it will be necessary to precede the name of the JSON file with the web path to the file. So, something like `./` or
`../../` should work.

```markdown

{{< timelinejs blockId="timeline-id" tlData="./timelinejs.json" >}}

```

## Issues

If you have any issues with use of the modules, please open up an issue, and I will attempt to respond as soon as possible.

## Contributing

This module uses [semantic-release][semantic-release] to automate the release of new versions. The package uses `husky`
and `commitlint` to ensure commit messages adhere to the [Conventional Commits] [conventionalcommits] specification. You
can run `npx git-cz` from the terminal to help prepare the commit message.

---

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
[Timelinejs3_Github]: https://github.com/NUKnightLab/TimelineJS3
[Timelinejs Site]: https://timeline.knightlab.com
[Timelinejs Docs]: https://timeline.knightlab.com/docs/instantiate-a-timeline.html
[This Module]: https://github.com/anoduck/mod-timleinejs3
[SRI Hash]: https://www.srihash.org/
[Google_CSP_Evaluator]: https://csp-evaluator.withgoogle.com/
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/
