{
    try {
        var _usingCtx = _using_ctx();
        const a = _usingCtx.u(1);
        const b = _usingCtx.a(2);
        const c = _usingCtx.u(3);
    } catch (_) {
        _usingCtx.e = _;
    } finally{
        await _usingCtx.d();
    }
}
