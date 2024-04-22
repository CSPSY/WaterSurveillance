<script setup>
import { onMounted, ref, reactive, onUnmounted } from 'vue';

defineOptions({
    name: 'FactoryEditDialog'
});

const props = defineProps(['visible', 'data']);
const emit = defineEmits(['close']);

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
    factoryInfo.name = props.data.name;
    factoryInfo.district = props.data.district;
    factoryInfo.month = props.data.month;
    factoryInfo.free_chlorine = props.data.free_chlorine;
    factoryInfo.ph_value = props.data.ph_value;
    factoryInfo.turbidity = props.data.turbidity;
    factoryInfo.platinum_cobalt_color = props.data.platinum_cobalt_color;
    factoryInfo.total_coliform = props.data.total_coliform;
    factoryInfo.total_bacteria = props.data.total_bacteria;
});

const formRef = ref(null);
const formRules = {
    name: [{ required: true, message: '请输入水厂名', trigger: 'blur' }],
    district: [{ required: true, message: '请输入所属地区', trigger: 'blur' }],
    month: [{ required: true, message: '请输入时间', trigger: 'blur' }],
    free_chlorine: [{ required: true, message: '请输入游离氯', trigger: 'blur' }],
    ph_value: [{ required: true, message: '请输入ph值', trigger: 'blur' }],
    turbidity: [{ required: true, message: '请输入浑浊度', trigger: 'blur' }],
    platinum_cobalt_color: [{ required: true, message: '请输入铂钴色度', trigger: 'blur' }],
    total_coliform: [{ required: true, message: '请输入总大肠菌群', trigger: 'blur' }],
    total_bacteria: [{ required: true, message: '请输入菌落总数', trigger: 'blur' }],
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
</script>

<template>
    <el-dialog v-model="props.visible" @close="handleClose" title="编辑" width="550" align-center>
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
                            <el-input v-model="factoryInfo.month" placeholder="时间" clearable />
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
        <el-button style="float: right;"type="primary">确认</el-button>
    </el-dialog>
</template>

<style scoped>
</style>