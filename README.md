# AdTech Coding Challenge
You will be implementing a simple header bidding client in JavaScript which contains a tiny subset of functionality from our live script.

## Resources
[GPT Documentation](https://developers.google.com/doubleclick-gpt/)  
[A9 Display Example](/images/a9_display_example.png)  
[A9 Display Deep Example](/images/a9_display_deep_example.png)  
[A9 Integration Verification](/images/a9_integration_verification.png)  
[A9 API Reference](/images/a9_api_reference.png)  
[Validation code](/images/validation.png)
[Validation visual](/images/visual-validation.png)

## Setup

### Prerequisites

```bash
cd /path/to/app/
npm install
```

### Compile

```bash
cd /path/to/app/
node_modules/.bin/webpack -p
```

### Start Server

```bash
cd /path/to/app/
npm start
```
You can access app at localhost:8080
### Dev Mode (Runs server and live reloads JS)

```bash
cd /path/to/app/
npm run dev
```
You can access app at localhost:8080
## Tips

Get started by running dev move and visit localhost:8080
```bash
cd app; npm install; npm run dev
```

Use the following for debugging
```javascript
googletag.openConsole(); //to debug gpt
apstag.debug('enable'); //activates aps debug mode and always returns test creative
googletag.pubads().refresh(); //forces an ad load/refresh
```

When requesting bids from amazon, this is the config you're expected to use
```json
[{
  slotID: 'SetRectangleHeader',
  slotName: 'SetRectangleHeader',
  sizes: [[300, 250]],
}, 
{
  slotID: 'SetPageFooter',
  slotName: 'SetPageFooter',
  sizes: [[728, 90]],
}]
```

To validate that your code works,
- [ ] On page (localhost:8080), activate aps debug mode by running `apstag.debug('enable');` in console
- [ ] Refresh your page
- [ ] Validate that you see orange creatives as shown in [this screenshot](/images/visual-validation.png). It's okay if this doesn't happen 100% of times as long as the next steps happen 100% of times.
- [ ] Open network tab in dev tools and filter for google ads requests (use `ads?`)
- [ ] Refresh your page
- [ ] Inspect the payload sent to google and ensure that amazon key values are set in the request as shown in [this screenshot](/images/validation.png)  


To test that it works, enable apstag debug mode and confirm that you are seeing a test orange creative.

## Submission

Please zip up your code and send to the Ads engineering manager.
