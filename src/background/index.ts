

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "DatasetHelper",
        title: "Übersetzen und in Tabelle hinzufügen",
        contexts: ["selection"]
    })
})


chrome.contextMenus.onClicked.addListener(async (info) => {
    console.log("test")
    if (info.menuItemId === "DatasetHelper") {

        try {

            const selectedText = info.selectionText
            const pageURL = info.pageUrl
            console.log(selectedText)

            await fetch('https://easyreader-proxy.onrender.com/api/googleSheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "text": selectedText,
                    "url": pageURL
                }),
            });
        } catch (e) {
            console.error(e)
        }

    }

})