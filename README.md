I've created a aws s3 hosted static website. I locally compiled my code using VS and hosted it in my S3 bucket, then i was able to host it through the bucket using the static website hosting feature on aws. I figured if this were a actual live website for an enterprise, modifications would be something that needs to be done at most times to update the website with presumely new information for whatever the case it may be.
To modify a websited hosted in a S3 bucket you would need to manually upload your newley updated html code in the bucket. This is a lengthy process that needs you to log in the amazon interface, put in your password and do all of the boring stuff.
So i thought to myself, "why not simplify the process of updating the code?".
That's where Github comes in my friend, it allows me to automate this process and reduce the time it takes to update the code.
With the Git i was able to create a CI/CD pipeline that allows me to update my code right after saving it locally in my compiler and then using my powershell terminal with just 3 lines of code, very short code at that.
This is the perfect/ effiecient solution for a very able but lazy engineer like myself. 
This here is a solution for efficiency.
