# Docker for Runpod

```bash
# Build
docker build -t tristan367/wwg-ai-poc docker/

# Push
docker push tristan367/wwg-ai-poc

# Test locally (no GPU needed for UI check)
docker run -p 8888:8888 tristan367/wwg-ai-poc
```

Open http://localhost:8888.

On Runpod: create GPU Pod with `tristan367/wwg-ai-poc`, expose port 8888.
