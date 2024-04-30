<script setup>
import { onMounted, ref, reactive, onUnmounted } from 'vue';
import { createWaterFactoryInfo } from '@/api/water';

defineOptions({
    name: 'FactoryCreateDialog'
});

const props = defineProps(['visible', 'data']);
const emit = defineEmits(['close', 'refresh']);

const handleClose = () => {
    emit('close');
};

const factoryInfo = reactive({
    name: '',
    district: '',
    month: '',
    free_chlorine: '',
    ph_value: '',
    turbidity: '',
    platinum_cobalt_color: '',
    total_coliform: '',
    total_bacteria: ''
});

onMounted(() => {
    factoryInfo.name = '';
    factoryInfo.district = '';
    factoryInfo.month = '';
    factoryInfo.free_chlorine = '';
    factoryInfo.ph_value = '';
    factoryInfo.turbidity = '';
    factoryInfo.platinum_cobalt_color = '';
    factoryInfo.total_coliform = '';
    factoryInfo.total_bacteria = '';
});

const formRef = ref(null);
const formRules = {
    name: [{ required: true, message: '请输入水厂名', trigger: 'blur' }],
    district: [{ required: true, message: '请输入所属地区', trigger: 'blur' }],
    month: [{ required: true, message: '请输入时间', trigger: 'blur' }],
    free_chlorine: [{ required: false, message: '请输入游离氯', trigger: 'blur' }],
    ph_value: [{ required: false, message: '请输入ph值', trigger: 'blur' }],
    turbidity: [{ required: false, message: '请输入浑浊度', trigger: 'blur' }],
    platinum_cobalt_color: [{ required: false, message: '请输入铂钴色度', trigger: 'blur' }],
    total_coliform: [{ required: false, message: '请输入总大肠菌群', trigger: 'blur' }],
    total_bacteria: [{ required: false, message: '请输入菌落总数', trigger: 'blur' }],
};

onUnmounted(() => {
    factoryInfo.name = '';
    factoryInfo.district = '';
    factoryInfo.month = '';
    factoryInfo.free_chlorine = '';
    factoryInfo.ph_value = '';
    factoryInfo.turbidity = '';
    factoryInfo.platinum_cobalt_color = '';
    factoryInfo.total_coliform = '';
    factoryInfo.total_bacteria = '';
});

const confirm = async () => {
    if (!formRef.value) { return; }
    const isValid = await formRef.value.validate();

    if (isValid) {
        const time = { year: '', month: '' };
        time.year = factoryInfo.month.getFullYear();
        time.month = factoryInfo.month.getMonth()+1;
        if (time.month < 10) { time.month = '0' + time.month; }

        factoryInfo.month = time.year + '-' + time.month;
        for (let item in factoryInfo) {
            console.log(factoryInfo[item])
            if (!factoryInfo[item]) { factoryInfo[item] = 0; } ;
        }
        createWaterFactoryInfo(factoryInfo).then(res => {
            if (res.data.errno === -1) {
                throw new Error(res.data.message);
            }
            ElMessage({ message: res.data.data.message, type: 'success' });
            emit('refresh');
            handleClose();
        }).catch(err => {
            ElMessage.error(err.message);
        });
    } else {
        ElMessage.error('请填写检查信息');
    }
};
</script>

<template>
    <el-dialog v-model="props.visible" @close="handleClose" title="添加" width="550" align-center>
        <el-card style="margin-bottom: 12px;" shadow="hover">
            <el-form :model="factoryInfo" :rules="formRules" ref="formRef">
                <el-row :gutter="8">
                    <el-col :span="16">
                        <el-form-item prop="name" label="水厂名">
                            <el-input v-model="factoryInfo.name" placeholder="水厂名" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="district" label="所属地区">
                            <el-input v-model="factoryInfo.district" placeholder="所属地区" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="8">
                    <el-col :span="8">
                        <el-form-item prop="month" label="时间">
                            <!-- <el-input v-model="factoryInfo.month" placeholder="时间" clearable /> -->
                            <el-date-picker v-model="factoryInfo.month" type="month" placeholder="选择时间" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="free_chlorine" label="游离氯">
                            <el-input v-model="factoryInfo.free_chlorine" placeholder="游离氯" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="ph_value" label="ph值">
                            <el-input v-model="factoryInfo.ph_value" placeholder="ph值" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="8">
                    <el-col :span="8">
                        <el-form-item prop="turbidity" label="浑浊度">
                            <el-input v-model="factoryInfo.turbidity" placeholder="浑浊度" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="platinum_cobalt_color" label="铂钴色度">
                            <el-input v-model="factoryInfo.platinum_cobalt_color" placeholder="铂钴色度" clearable />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item prop="total_coliform" label="总大肠菌群">
                            <el-input v-model="factoryInfo.total_coliform" placeholder="总大肠菌群" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row style="height: 32px;" :gutter="8">
                    <el-col :span="8">
                        <el-form-item prop="total_bacteria" label="菌落总数">
                            <el-input v-model="factoryInfo.total_bacteria" placeholder="菌落总数" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <el-button style="float: right;"type="primary" @click="confirm">确认</el-button>
    </el-dialog>
</template>

<style scoped>
</style>