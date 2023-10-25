using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;
using System.IO;


namespace BlazorApp1.Data
{
    public class ExportService
    {
        public MemoryStream CreatePdf(string url)
        {
            //Initialize HTML to PDF converter.
            HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();
            //Convert URL to PDF document.
            PdfDocument document = htmlConverter.Convert(url);
            //Create memory stream.
            MemoryStream stream = new MemoryStream();
            //Save the document to memory stream.
            document.Save(stream);
            return stream;
        }
    }
}
