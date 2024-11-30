#ifdef GL_ES
precision mediump float;
#endif

varying vec2 v_texCoords;
uniform sampler2D u_texture;

// Define a struct for light properties
struct Light {
    vec2 position;
    float radius;
    vec3 color;
};

// Uniform array of lights
uniform int u_numLights; // Number of active lights
uniform Light u_lights[10]; // Array of lights, max number set to 10

void main() {
    vec4 texColor = texture2D(u_texture, v_texCoords);
    vec4 totalLight = vec4(0.0);

    for (int i = 0; i < u_numLights; ++i) {
        float distance = distance(u_lights[i].position, v_texCoords);
        float intensity = 1.0 - smoothstep(0.0, u_lights[i].radius, distance);

        // Quantize the intensity to create discrete steps
        //    int numSteps = 8; // Number of color steps, adjust as needed
        //    float quantizedIntensity = floor(intensity * float(numSteps)) / float(numSteps);

        // Additive blending (light effect)
        //    vec4 lightColor = vec4(u_lightColor, 1.0) * quantizedIntensity;
        totalLight += vec4(u_lights[i].color, 1.0) * intensity;
    }

    // Ensuring we don't exceed 1.0 in any color channel
    totalLight = min(totalLight, vec4(1.0));

    // Add the calculated total light to the texture color
    gl_FragColor = texColor + totalLight;
}