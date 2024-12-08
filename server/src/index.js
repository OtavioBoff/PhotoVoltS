const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const port = 3000;
const ip = "192.168.0.13";
const cors = require('cors');
const app = express();

app.use(cors());  // Permite todas as origens

// Middleware para ler JSON do corpo da requisição
app.use(express.json());

// Função para rodar o script Octave
function runOctaveScript(params) {
    const scriptPath = path.join(__dirname, "../modelo_fotovoltaico.m"); // Caminho do script
    const command = `octave --silent ${scriptPath} ${params.join(" ")}`;

    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(new Error(`Erro ao executar o script: ${error.message}`));
                return;
            }
            if (stderr) {
                reject(new Error(`Erro no Octave: ${stderr}`));
                return;
            }
            resolve(stdout);
        });
    });
}

// Rota para receber a requisição POST e executar o script Octave
app.post('/run-model', async (req, res) => {
    const { temperature, voltage, maxPower, current } = req.body;

    // Verifique se todos os parâmetros necessários estão presentes
    if (temperature && voltage && maxPower && current) {
        try {
            // Chame o Octave passando os parâmetros
            const result = await runOctaveScript([temperature, voltage, maxPower, current]);
            res.json({ message: 'Script executado com sucesso', result });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(400).json({ message: 'Faltando parâmetros necessários' });
    }
});

// Diretório onde as imagens estão
const imagesPath = path.join(__dirname, '../octave-image');

// Servir arquivos estáticos
app.use('/octave-image', express.static(imagesPath));

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://${ip}:${port}`);
});
