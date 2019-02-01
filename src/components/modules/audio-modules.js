const redoUrl1 = 'https://www.natorisana.love/sounds/%E3%81%9B%E3%82%93%E3%81%9B%E3%81%88%E3%81%A8%E3%81%AA%E3%81%84%E3%81%97%E3%82%87%E3%81%B0%E3%81%AA%E3%81%97/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E7%84%A1%E7%90%86%E3%81%9B%E3%81%9A%E3%81%AB.mp3';
const redoUrl2 = 'https://www.natorisana.love/sounds/GW%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8A%E9%85%8D%E4%BF%A1/%E4%BC%91%E3%82%93%E3%81%98%E3%82%83%E3%81%88%E3%81%B0%E3%83%BC%EF%BC%9F.mp3'

const doneUrl1 = 'https://www.natorisana.love/sounds/%E3%81%9B%E3%82%93%E3%81%9B%E3%81%88%E3%81%A8%E3%81%AA%E3%81%84%E3%81%97%E3%82%87%E3%81%B0%E3%81%AA%E3%81%97/%E8%AA%BF%E5%AD%90%E3%81%AB%E4%B9%97%E3%81%A3%E3%81%9F%E3%82%89%E3%81%A0%E3%82%81%E3%81%A0%E3%81%9E.mp3'
const doneUrl2 = 'https://www.natorisana.love/sounds/%E7%BE%8E%E8%A1%93%E9%A4%A8/%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C%E3%81%8C%E3%82%93%E3%81%B0%E3%82%8C.mp3'
const doneUrl3 = 'https://www.natorisana.love/sounds/%E5%90%8D%E5%8F%96%E3%81%A8%E5%85%B1%E3%81%AB%E5%9C%B0%E7%8D%84%E3%81%AB%E5%8F%A9%E3%81%8D%E8%90%BD%E3%81%95%E3%82%8C%E3%82%8B/%E3%81%82%E3%82%89%E3%82%84%E3%82%8A%E3%81%BE%E3%81%99%E3%81%AD%E3%81%87%EF%BC%81.mp3'

const doneList = [doneUrl1, doneUrl2, doneUrl3]
const redoList = [redoUrl1, redoUrl2]

export default {
    donePlay: () => {
        let doneIndex = Math.floor(Math.random() * doneList.length);
        let doneUrl = doneList[doneIndex];
        let audioElem = new Audio();
        audioElem.src = doneUrl
        audioElem.play()
    },
    redoPlay: () => {
        let redoIndex = Math.floor(Math.random() * redoList.length);
        let redoUrl = redoList[redoIndex];
        let audioElem = new Audio();
        audioElem.src = redoUrl
        audioElem.play()
    }
}