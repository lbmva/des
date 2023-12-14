const InputText = document.getElementById('Text');
const InputKey = document.getElementById('Key');
const StartButton = document.getElementById('Start');
const EncriptText = document.getElementById('EncriptText');
const DecriptText = document.getElementById('DecriptText');

StartButton.addEventListener('click', () => {
  const text =InputText.value;
  if (text.length !== 8) {
    alert('Текст должен состоять из 8 символов');
    return;
  }
  const key = InputKey.value;
  const ciphertext = DESEncrypt(text, key);
  const decrypt = DESDecrypt(ciphertext, key);
  EncriptText.innerHTML = ciphertext;
  DecriptText.innerHTML = decrypt;
});

