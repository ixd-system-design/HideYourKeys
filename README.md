# HideYourKeys

[![Open in Coder](https://ixdcoder.com/open-in-coder.svg)](https://ixdcoder.com/templates/Node/workspace?name=HideYourKeys&mode=auto&param.git_repo=https://bender.sheridanc.on.ca/system-design/hideyourkeys)

## Context
NodeJS can help us to secure our API Keys. To test this out, compare this code with the [prior NASA example](https://bender.sheridanc.on.ca/system-design/ui-for-data-fetching/-/tree/main/nasa), in which our API Key was publicly visible. 

## Learning Prompts
Can you add your own Nasa API Key to the environment in order to make this code function?
- Use the `.env` (dotenv) file in your Coder environment to set the `NASA_KEY` environment variable. 
- It may look something like this:

```
PORT=8000 
NASA_KEY=abc123def456...
```

