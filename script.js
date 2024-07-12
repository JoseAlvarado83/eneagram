document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questionnaire');

    // Preguntas de identificación
    const questions = [
        { question: 'Correo Electrónico', type: 'email' },
        { question: 'Documento de Identidad', type: 'text' },
        // Añadir preguntas de sí/no aquí
        { question: '¿Pregunta 1?', type: 'boolean' },
        { question: '¿Pregunta 2?', type: 'boolean' },
        // Añade el resto de las 279 preguntas aquí
    ];

    questions.forEach(({ question, type }, index) => {
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.textContent = question;
        label.htmlFor = `q${index}`;
        div.appendChild(label);

        if (type === 'boolean') {
            const yesLabel = document.createElement('label');
            yesLabel.textContent = 'Sí';
            const yesInput = document.createElement('input');
            yesInput.type = 'radio';
            yesInput.name = `q${index}`;
            yesInput.value = 'Sí';
            yesLabel.appendChild(yesInput);
            div.appendChild(yesLabel);

            const noLabel = document.createElement('label');
            noLabel.textContent = 'No';
            const noInput = document.createElement('input');
            noInput.type = 'radio';
            noInput.name = `q${index}`;
            noInput.value = 'No';
            noLabel.appendChild(noInput);
            div.appendChild(noLabel);
        } else {
            const input = document.createElement('input');
            input.type = type;
            input.id = `q${index}`;
            input.name = `q${index}`;
            div.appendChild(input);
        }

        form.appendChild(div);
    });

    // Añadir botón de enviar
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Enviar';
    form.appendChild(submitButton);

    // Manejar envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        console.log('Datos del formulario:', Object.fromEntries(formData.entries()));
        // Aquí puedes manejar el envío de datos, por ejemplo, usando fetch para enviar a un servidor
    });
});
