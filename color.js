
    // Access the user's webcam
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const colorValue = document.getElementById('colorValue');
    const barcodeValue = document.getElementById('barcodeValue');

    // Start webcam feed
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
        video.play();
      })
      .catch(err => console.error("Error accessing camera: ", err));

    // Capture color on mouse click
    video.addEventListener('click', (event) => {
      const x = event.offsetX;
      const y = event.offsetY;
      
      // Draw the current frame from the video to the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Get pixel color data at the clicked position
      const pixel = context.getImageData(x, y, 1, 1).data;
      
      // Convert to RGB string format
      const rgbColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
      colorValue.textContent = rgbColor;
      colorValue.style.backgroundColor = rgbColor;  // Display the color on the page
    });

    // Function to start barcode scanning
    function startBarcodeScanner() {
      Quagga.init({
        inputStream: {
          type: "LiveStream",
          constraints: {
            facingMode: "environment"
          },
          target: video // Use the video element as the source
        },
        decoder: {
          readers: ["code_128_reader", "ean_reader", "ean_8_reader", "upc_reader", "upc_e_reader"]
        }
      }, function(err) {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      });

      // Handle barcode detection
      Quagga.onDetected(function(result) {
        barcodeValue.textContent = `Barcode Scanned: ${result.codeResult.code}`;
      });
    }
 