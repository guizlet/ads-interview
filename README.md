## AdTech Coding Challenge
You will be implementing a simple header bidding client in JavaScript which contains a tiny subset of functionality from our live script.

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

Please zip up your code and send to the Ads engineering manager.
