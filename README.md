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
    <a href="https://github.com/anoduck/mod-timelinejs3/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/anoduck/mod-timelinejs3.svg">
    </a>
    <a href="https://github.com/anoduck/mod-timelinejs3/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/anoduck/mod-timelinejs3.svg">
    </a>
    <a href="https://github.com/anoduck/mod-timelinejs3/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/anoduck/mod-timelinejs3.svg">
    </a>
    <a href="https://github.com/anoduck/mod-timelinejs3/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/anoduck/mod-timelinejs3">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a [template][repository_template], and a [main theme][repository]. This repository maintains a Hugo module to add KnightLab's timelinejs3 to a Hinode site. Visit the Hinode documentation site for [installation instructions][hinode_docs].

## Contributing

This module uses [semantic-release][semantic-release] to automate the release of new versions. The package uses `husky` and `commitlint` to ensure commit messages adhere to the [Conventional Commits][conventionalcommits] specification. You can run `npx git-cz` from the terminal to help prepare the commit message.

## Configuration

This module is configured to act as a shortcode, thus only loading the timelinejs only if the shortcoode is used on the page. Advanced configuration of timelinejs options is not needed, and are already optimized for use. Data is stored in the `static` data in the form of a json file. More information about the format of the json file can be found on [Knightlab's webiste](https://timeline.knightlab.com/docs/json-format.html). The shortcode only takes two arguments, which are described below.

| Setting                   | Default            | Description                                    |
|---------------------------|--------------------|------------------------------------------------|
| blockId                   | "timeline-element" | The ID attribute given to the timeline element |
| jsonFile                  | "timelinejs.json"  | The JSON file containing event data            |

The shortcode can be used with labeled arguments or positional arguments.

```html
{{< timelinejs blockId="timeline-element" jsonFile="/timelinejs.json" >}}
<!-- or -->
{{< timelinejs "timeline-element" "/timelinejs.json" >}}
```

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
[Timelinejs3_Github]: https://github.com/NUKnightLab/TimelineJS3
[Timelinejs Site]: https://timeline.knightlab.com
[This Module]: https://github.com/anoduck/mod-timleinejs3
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/
