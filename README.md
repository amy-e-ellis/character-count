# Word count
  
This [Aha! Develop](https://www.aha.io/develop/overview) extension helps you get the word and character counts for copy you are working on in Aha! Add the word count custom field to your Feature or Requirement card layout. Then paste in text to get the counts.

It provides these contributions:

- Word count field: Paste in text to find out the word and character count.

## Installing the extension

**Note: In order to install an extension into your Aha! Develop account, you must be an account administrator.**
This extension is not quite ready yet. Grab the development version by by following the instructions below.

## Working on the extension

Install [`aha-cli`](https://github.com/aha-app/aha-cli):

```sh
npm install -g aha-cli
```

Clone the repo:
https://github.com/amy-e-ellis/character-count/

```sh
git clone ...
```

**Note: In order to install an extension into your Aha! Develop account, you must be an account administrator.**

Install the extension into Aha! and set up a watcher:

```sh
aha extension:install
aha extension:watch
```

Now, any change you make inside your working copy will automatically take effect in your Aha! account.

## Building

When you have finished working on your extension, package it into a `.gz` file so that others can install it:

```sh
aha extension:build
```

After building, you can upload the `.gz` file to a publicly accessible URL, such as a GitHub release, so that others can install it using that URL.

To learn more about developing Aha! Develop extensions, including the API reference, the full documentation is located here: [Aha! Develop Extension API](https://www.aha.io/support/develop/extensions)
