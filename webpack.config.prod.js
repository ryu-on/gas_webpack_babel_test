module.exports = {
  // ���C���ƂȂ�JavaScript�t�@�C���i�G���g���[�|�C���g�j
  entry: `./src/main.js`,

  // �t�@�C���̏o�͐ݒ�
  output: {
    //  �o�̓t�@�C���̃f�B���N�g����
    path: `${__dirname}/dev`,
    // �o�̓t�@�C����
    filename: "main.js"
  }
};
