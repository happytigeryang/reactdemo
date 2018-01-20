export default function getAgreement() {
    return new Promise(() => {
        return {Version: "1.0", Content: "agreement content"}
    }, () => {
        return {Error: "get agreement failture"}
    })
}