# Requirement

# Configurable UI for a Interest Submission Form

## Frontend
It should get a configuration json from BE which instructs the FE's rendering of the form fields. That means if the config JSON changes, the FE will change accordingly. 
1. Initial Form Config
   1. Page 1
        1. [required] name: string
        2. [required] gender: select from M, F and Nonbinary 
        3. [required] age: number
    2. Page 2
        1. [required] profession: select from “Owner”, “Agent”, “Buyer” and “Seller”. Allow custom input
        2. [Optional] what services do you need?: custom input
        3. Submit button: the submission should send the data entered above to the server
2. The BE config JSON should be able to configure those in FE
    1. the questions for each page
    2. the number of form pages
    3. for each question
        1. validation criteria 
        2. multi selection options
        3. input type change: textinput -> multi selection
    3. The form times out in 30 mins. The timeout threshold should be configurable through the config json as well. Upon timeout, if the form is not submitted, the user will be redirected to page 1 and all storage reset.
    4. Typescript is strongly encouraged but not required.

## Backend
1. endpoints for FE to get the config json
2. endpoints to receive the submission data from FE with data validation. Data persistence is strongly encouraged but not required

