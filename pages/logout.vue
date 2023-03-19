<script setup lang="ts">
    import { useAuthStore } from '~~/store/auth';

    const auth = useAuthStore()

    auth.logout()
</script>
