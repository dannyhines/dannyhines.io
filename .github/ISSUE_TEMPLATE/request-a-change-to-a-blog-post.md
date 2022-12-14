name: Request a change to a blog post
description: Typo, broken link, or innacurate information in the Blog
title: Request change to Blog Post
labels: typo
assignees: danielchines
body:
  - type: markdown
    attributes:
      value: |
        Typo, broken link, or innacurate information? Thanks for letting me know
  - type: input
    id: post-title
    attributes:
      label: Blog Post Title
      description: Doesn't need to be exact
      placeholder: ex. ChatGPT blog
    validations:
      required: true
  - type: textarea
    id: whats-wrong
    attributes:
      label: What do I need to fix?
      placeholder: The link to Jasper.ai doesn't work
    validations:
      required: true
