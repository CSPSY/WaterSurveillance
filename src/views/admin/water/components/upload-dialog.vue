<script setup>
import { ref } from 'vue';
import { UploadFilled } from '@element-plus/icons-vue';

defineOptions({
    name: 'UploadDialog'
});

const props = defineProps(['visible', 'data']);
const emit = defineEmits(['close', 'refresh']);

const handleClose = () => {
    emit('close');
};

const fileList = ref([]);

const handleSuccess = (response, file, fileList) => {
    // 处理上传成功的逻辑
    console.log('上传成功:', response, file, fileList);
};

const beforeUpload = (file) => {
    // 检查文件类型，只允许上传Excel文件
    const fileType = file.name.split('.').pop().toLowerCase();
    if (fileType !== 'xls' && fileType !== 'xlsx') {
    this.$message.error('只能上传Excel文件');
    return false; // 阻止上传
    }
    return true; // 允许上传
};
</script>

<template>
    <el-dialog v-model="props.visible" @close="handleClose" title="批量上传" width="550" align-center>
        <el-upload
            class="upload-demo"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
        >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
            移动文件到此处或<em>点击此处选择文件</em>
            </div>
            <template #tip>
            <div class="el-upload__tip">
                只能上传 Excel 文件
            </div>
            </template>
        </el-upload>
    </el-dialog>
</template>

<style scoped>
.upload-excel {
    margin-top: 20px;
}
</style>
