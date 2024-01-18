import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class QRDisplayHelper{
    constructor(){}

    generatePDF(qrcode){
        var docDefinition = this.buildDocDefinition()
        docDefinition = this.buildImage(docDefinition, qrcode)
        this.download(docDefinition)
    }

    buildDocDefinition(){
        var docDefinition = {
            content: []
        }

        return docDefinition
    }

    buildImage(docDefinition, qrcode){
        docDefinition.content.push({
            image: `data:image/jpeg;base64,${qrcode}`,
            width: 300,
            height: 300,
        })
        return docDefinition
    }

    download(docDefinition){
        pdfMake.createPdf(docDefinition).download("QR.pdf");
    }
}

export default QRDisplayHelper

