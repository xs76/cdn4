#ifdef GL_ES
#define LOWP lowp
precision mediump float;
#else
#define LOWP
#endif

varying LOWP vec4 v_color;
varying vec2 v_texCoords;
uniform sampler2D u_texture;
uniform float u_time; // Time variable for animation
uniform vec4 u_texRegion; // (u, v, u2, v2) of the flag in the texture atlas

void main() {
    // Calculate the flag's texture coordinates in the atlas
    vec2 flagCoords = vec2(
    mix(u_texRegion.x, u_texRegion.z, v_texCoords.x),
    mix(u_texRegion.y, u_texRegion.w, v_texCoords.y)
    );

    // Adjust the sine wave
    float wave = sin(flagCoords.x * 4.0 * 3.14159 + u_time * 2.0); // Adjust frequency and speed

    // Adjust the amplitude of the wave and reintroduce smoothstep
    wave *= smoothstep(0.2, 0.5, (flagCoords.x - u_texRegion.x) / (u_texRegion.z - u_texRegion.x)) * 0.017;

    // Apply the wave to y-coordinate
    vec2 wavedCoords = vec2(v_texCoords.x, v_texCoords.y + wave);

    // Sample the texture with the waved coordinates
    vec4 texColor = texture2D(u_texture, wavedCoords);

    // Incorporate the current batch color
    gl_FragColor = v_color * texColor;
}
