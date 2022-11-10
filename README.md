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
   
### With docker

1. Run command to create Docker image
   ```bash
   $ docker build -t iwa-lab-1 .
   ```

2. Run Docker container
   
   ```bash
   $ docker run -it -p 8080:80 --name iwa-lab-1 <IMAGE_ID>
   ```
   
### With vagrant

1. Run command to create and configure guest machine according to Vagrantfile
   
   ```bash
   $ vagrant up
   ```
   
2. If you want to create a box (only VirtualBox) based on this virtual machine (NAME should be the name or UUID of the machine from the VirtualBox GUI) 

   ```bash
   $ vagrant package
   ```
   
### Check the result

1. Go to `localhost:8080` in your browser

   
