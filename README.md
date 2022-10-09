## How to run

1. Clone this repository 

    SSH: 
    ```bash 
    $ git clone git@github.com:Scopics/IWA-lab1.git
    ```

    HHTP: 
    ```bash 
    $ git clone https://github.com/Scopics/IWA-lab1.git
    ```

2. Change working directory
   ```bash
   $ cd IWA-lab1
   ```

3. Run command to create Docker image
   ```bash
   $ docker build -t iwa-lab-1 .
   ```

4. Run Docker container
   ```bash
   $ docker run -it -p 3000:80 --name iwa-lab-1 <IMAGE_ID>
   ```