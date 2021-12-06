## AdTech Coding Challenge
You will be implementing a simple header bidding client in JavaScript which contains a tiny subset of functionality from our live script.

### Instructions
- Fetch bids from Amazon(A9) using the APS library
- Run an auction using GPT library
- Render the winning ad

#### Additional Specifications
* Refresh ad slots every 30 seconds
* Only load ads that are visible on the page
* [bonus] -- what if we wanted to "prefetch" a third ad to show sometime in the future? How could you add some logic to your bid fetching architecture so you could request bids before the third GPT slot is on the page, and then render that ad on command (i.e. after a certain user flow completes)? We are looking for you to implement this manually (as opposed to using GPT's built-in [enableLazyLoad](https://developers.google.com/publisher-tag/reference#enablelazyloadopt_config) method)

Both GPT and APS have already been initialized and configured for you in `init.js`. Test ads are also loading through GPT. You have been provided with a starter webpack app inside the `./app` folder.

Please do not spend more than 2 hours on this challenge. Feel free to leave comments on what you would have done differently if you had more time. You will be given the opportunity to talk about what else could have been done in the in-person interview.

### Tips
* Instructions are vague on purpose. We are curious to see how you will interpret them and would like to leave implementation details up to you
* A README.md or proper code documentation which allows us to easily understand your code makes our life much easier

### Resources
[GPT Documentation](https://developers.google.com/doubleclick-gpt/)  
[A9 Display Example](/images/a9_display_example.png)  
[A9 Display Deep Example](/images/a9_display_deep_example.png)  
[A9 Integration Verification](/images/a9_integration_verification.png)  
[A9 API Reference](/images/a9_api_reference.png)  

### Setup

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

### Dev Mode (Runs server and live reloads JS)

```bash
cd /path/to/app/
npm run dev
```

### Helpful commands

```javascript
googletag.openConsole(); //to debug gpt
apstag.debug('enable'); //activates aps debug mode and always returns test creative
googletag.pubads().refresh(); //forces an ad load/refresh
```

### Submission

Please zip up your code and reply to email from which you received assignment.
