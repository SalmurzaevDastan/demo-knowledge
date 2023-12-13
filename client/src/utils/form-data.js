function appendFormData(formData, data, parentKey) {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      let resultKey = parentKey ? `${parentKey}[${key}]` : key;
      if (!Number.isNaN(parseInt(key, 10))) {
        resultKey = resultKey.replace(key, '');
      }
      appendFormData(formData, data[key], resultKey);
    });
  } else {
    const value = data == null ? '' : data;
    formData.append(parentKey, value);
  }
}

export function createFormData(obj) {
  const formData = new FormData();
  appendFormData(formData, obj);
  return formData;
}
