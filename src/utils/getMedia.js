const {select } = wp.data


export const getMediaUrl = (id) => {
  const medObj = select("core").getMedia(id)
  return medObj && medObj.source_url
}