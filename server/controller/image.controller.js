import File from './../models/file.js';

// controller for uploading the image
export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    }
    try {
        const file = await File.create(fileObj);
        response.status(200).json({ path: `http://localhost:4000/file/${file._id}` });
    }
    catch (error) {
        console.log("Error occured while uploading the image. " + error.message);
        // console.log(request);
        response.status(500).json({ error: error.message });
    }
}

// controller for getting the Image
export const getImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);
        file.downloadCount++;
        await file.save();
        response.download(file.path, file.name);
    } catch (error) {
        console.log("Error while fetching the image. " + error.message);
        response.status(500).json({ error: error.message });
    }
}