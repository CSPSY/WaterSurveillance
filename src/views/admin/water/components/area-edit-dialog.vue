<script setup>
import { onMounted, watch, ref } from 'vue';

defineOptions({
    name: 'AreaEditDialog'
});

const props = defineProps(['visible', 'data']);
const emit = defineEmits(['close']);

const handleClose = () => {
    emit('close');
};

const areaInfoRef = ref(null);
let areaInfo = areaInfoRef.value;

onMounted(() => {
    areaInfoRef.value = props.data;
    areaInfo = areaInfoRef.value;
});

watch(
    () => props.data,    
    () => {
        areaInfoRef.value = props.data;
        areaInfo = areaInfoRef.value; 
    }
);

const formRef = ref(null);
const formRules = {
    district: [{ required: true, message: '请输入地区名', trigger: 'blur' }],
    month: [{ required: true, message: '请输入时间', trigger: 'blur' }],
    free_chlorine: [{ required: true, message: '请输入游离氯', trigger: 'blur' }],
    ph_value: [{ required: true, message: '请输入ph值', trigger: 'blur' }],
    turbidity: [{ required: true, message: '请输入浑浊度', trigger: 'blur' }],
    platinum_cobalt_color: [{ required: true, message: '请输入铂钴色度', trigger: 'blur' }],
    total_coliform: [{ required: true, message: '请输入总大肠菌群', trigger: 'blur' }],
    total_bacteria: [{ required: true, message: '请输入菌落总数', trigger: 'blur' }],
};
</script>

<template>
    <el-dialog v-model="props.visible" @close="handleClose" width="500" align-center>
        <template #header>
            <div class="my-header">
                <span class="word">{{ props.data.district }}</span>
                <span class="number">{{ props.data.month }}</span>
            </div>
        </template>
        <el-form :model="areaInfo" :rules="formRules" ref="formRef">
            <el-row class="item" :gutter="8">
                <el-col :span="8">
                    <el-form-item prop="free_chlorine" label="游离氯">
                        <el-input v-model="areaInfo.free_chlorine" placeholder="游离氯" clearable :readonly="true" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="ph_value" label="ph值">
                        <el-input v-model="areaInfo.ph_value" placeholder="ph值" clearable :readonly="true" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="turbidity" label="浑浊度">
                        <el-input v-model="areaInfo.turbidity" placeholder="浑浊度" clearable :readonly="true" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="8">
                <el-col :span="8">
                    <el-form-item prop="platinum_cobalt_color" label="铂钴色度">
                        <el-input v-model="areaInfo.platinum_cobalt_color" placeholder="铂钴色度" clearable :readonly="true" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="total_coliform" label="总大肠菌群">
                        <el-input v-model="areaInfo.total_coliform" placeholder="总大肠菌群" clearable :readonly="true" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="total_bacteria" label="菌落总数">
                        <el-input v-model="areaInfo.total_bacteria" placeholder="菌落总数" clearable :readonly="true" />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-dialog>
</template>

<style scoped>
.my-header {
    margin-bottom: 12px;
}
.my-header .word {
    font-size: 1.2rem;
    font-weight: 550;
    opacity: .8;
    margin-right: 12px;
}
.my-header .number {
    font-size: 1rem;
}
.item {
    margin-bottom: 6px;
}
</style>