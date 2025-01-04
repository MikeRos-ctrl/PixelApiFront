const FetchImgLogic = () => {

    async function fetchImages(data) {

        try {
            const images = Object.keys(data).map(key => ({
                ...data[key],
                Image: data[key]["Image"],
                Name: data[key]["Name"],
                ImageId: data[key]["ImageId"] || null
            }));

            const responses = await Promise.all(images.map(key => fetch(key.Image)));

            if (responses.every(response => response.ok)) {

                const blobs = await Promise.all(responses.map(response => response.blob()));

                const fetchedGallery = blobs.map((key, index) => ({
                    ...images[index],
                    Image: URL.createObjectURL(key),
                    Name: images[index].Name,
                    ImageId: images[index].ImageId
                }));

                return {
                    fetchedGallery: fetchedGallery,
                    refreshGallery: true
                }
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return {
        fetchImages,
    }
}
export { FetchImgLogic }