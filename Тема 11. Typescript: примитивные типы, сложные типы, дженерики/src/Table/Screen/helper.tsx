export const funcUpload = {
    async uploadFile(file: File | undefined) {
        return new Promise((resolve, reject) => {
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const formData = new FormData();
                    formData.set('name', 'name_select_dsf');
                    formData.set('key', '9117375ef66d133ad2ec9f2f5f5a4b54');
                    formData.set('image', file);

                    fetch('https://api.imgbb.com/1/upload', {
                        'body': formData,
                        'method': 'POST',
                    })
                        .then((data) => data.json())
                        .then((data: any) => {
                            return resolve(data);
                        })
                        .catch((data: any) => {
                            return reject(data);
                        });
                };
            } else {
                reject(new Error('Invalid data'));
            }
        });
    },
};
