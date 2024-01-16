from dotenv import load_dotenv
load_dotenv()

import cloudinary
import cloudinary.uploader
import cloudinary.api

import json

config = cloudinary.config(secure=True)

print("****1. Set up and configure the SDK:****\nCredentials: ", config.cloud_name, config.api_key, "\n")

def uploadImage():
    cloudinary.uploader.upload("https://cloudinary-devs.github.io/cld-docs-assets/assets/images/butterfly.jpeg", public_id="quickstart_butterfly", unique_filename = False, overwrite=True)
    srcURL = cloudinary.CloudinaryImage("quickstart_butterfly").build_url()
    print("****2. Upload an image****\nDelivery URL: ", srcURL, "\n")

def getAssetInfo():
    image_info=cloudinary.api.resource("quickstart_butterfly")
    print("****3. Get and use details of the image****\nUpload response:\n", json.dumps(image_info,indent=2), "\n")
    if image_info["width"]>900:
        update_resp=cloudinary.api.update("quickstart_butterfly", tags = "large")
    elif image_info["width"]>500:
        update_resp=cloudinary.api.update("quickstart_butterfly", tags = "medium")
    else:
        update_resp=cloudinary.api.update("quickstart_butterfly", tags = "small")
    print("New tag: ", update_resp["tags"], "\n")

def createImageTag():
    imageTag = cloudinary.CloudinaryImage("quickstart_butterfly").image(radius="max", effect="sepia")
    print("****4. Transform the image****\nTransfrmation URL: ", imageTag, "\n")

def main():
  uploadImage()
  getAssetInfo()
  createImageTag()
main();
