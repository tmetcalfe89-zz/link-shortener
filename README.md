# link-shortener
Probably a misnomer. The link shortening is done manually by editing a JSON file.

## What it does
This is an Express JS web server that listens for incoming requests on a given port, then redirects the client to the corresponding URL in the `db/redirs.json` file. It also keeps track of how many times a given URL has been redirected to. The `db/redirs.json` file can be edited while the server is live to add more redirs.

## Why does this exist
I needed a solution for quick branded redirects with minimal effort.

## How to use
Add a `db/redirs.json` file and go to town adding redirs.
The format for the redirs file is as follows:
```
{
  "<incoming request url>": {
    "url": "<outgoing redirect url>",
    "count": 0
  }
}
```
Note that count will update every time someone visits the incoming request url and is successfully redirected to the outgoing redirect url.
