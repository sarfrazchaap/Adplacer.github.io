body {
    text-align: center;
    font-family: Arial, sans-serif;
}

#grid {
    display: grid;
    grid-template-columns: repeat(50, 10px);
    grid-template-rows: repeat(50, 10px);
    gap: 1px;
    justify-content: center;
    margin: 20px auto;
    width: 510px;
    background-color: #ddd;
}

.pixel {
    width: 10px;
    height: 10px;
    background-color: white;
    border: 1px solid #ccc;
    cursor: pointer;
}

.pixel:hover {
    background-color: lightgray;
}
