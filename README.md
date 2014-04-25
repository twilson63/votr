# Votr App

A simple voting app using firebase

## usage

Inorder to setup you voting app you need the following:

* Nodejs installed (http://nodejs.org)
* Firebase Account (http://firebase.com)
* Bower (npm install bower -g)
* A place to host your app, (S3, DropBox, Harp)
* A Domain you can use to point to your app

Once you have these things this is how you configure your voting settings

1. clone the repository

```
git clone https://github.com/twilson63/votr.git
```

2. cd into the directory and npm install

```
cd votr
bower install 
npm install
```

3. open package.json in an editor and edit the votr settings

```
"votr": {
  "title": "Awesome Vote",
  "twitter": "#awesomeVote",
  "items": [
    "1",
    "2",
    "3"
  ],
  "firebase": "https://yoururl.firebaseio.com"
}
```

The `title` value is the name that will appear in your header of your voting app

The `twitter` value is the hashtag that will appear on your twitter button

The `items` array are the descriptions of the items you want to vote on

The `firebase` value is the url to your firebase database.

Now, open firebase and set your simple login `anonymous` to enabled. and in your security rules, do the following:

``` json
{
  ".read": "true",
  ".write": "auth != null"
}
```

Once you have these settings configured, then you are ready to test out your voting application:

```
npm start
```

Open Browser to localhost:3000

You should see your title and a login button and your twitter hash tag
Click login, and you should see the items you are voting on.  Click the item you want to vote and it should take you to the results page.

If everything is working, you are ready to deploy to production!

## deploy to production

Now that you have configured your voting experience, it is time to move it to production. 

### DropBox

If you have dropbox, you should be able to stop the dev server and copy the www folder to your public drop box folder and you should be good to go.  

### S3

With S3, I would recommend using a tool like `s3foo` to push up your www directory.

## LICENSE

MIT

## SUPPORT

see Issues

## Change Requests

Pull Requests are welcome!

  