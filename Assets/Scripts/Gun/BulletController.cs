using UnityEngine;

/// <summary>
/// Controls the behavior of a bullet in the game.
/// </summary>
public class BulletController : MonoBehaviour
{
    /// <summary>
    /// The speed at which the bullet travels.
    /// </summary>
    public float speed = 20f;

    /// <summary>
    /// The maximum distance the bullet can travel.
    /// </summary>
    public float range = 20f;

    /// <summary>
    /// The amount of damage the bullet deals.
    /// </summary>
    public float damage = 10f;

    /// <summary>
    /// The distance traveled which is increased over time.
    /// </summary>
    private float distanceTravelled = 0f;

    /// <summary>
    /// Reference to the CharacterController.
    /// </summary>
    private CharacterController controller;

    private void Start() => controller = GetComponent<CharacterController>();

    /// <summary>
    /// If the bullet's distance traveled is greater than its range, it's destroyed.
    /// </summary>
    private void Update()
    {
        Vector3 moveDirection = transform.TransformDirection(Vector3.left);
        controller.Move(speed * Time.deltaTime * moveDirection);

        distanceTravelled += speed * Time.deltaTime;
        if (distanceTravelled >= range)
        {
            Destroy(gameObject);
        }
    }

    /// <summary>
    /// If the bullet hits an enemy, the enemy takes damage.
    /// </summary>
    /// <param name="hit">The game object that has collided with this game object.</param>
    private void OnControllerColliderHit(ControllerColliderHit hit)
    {
        if (hit.transform.CompareTag("Obstacle"))
        {
            Destroy(gameObject);
        }

        EnemyController enemy = hit.collider.GetComponent<EnemyController>();
        if (enemy != null)
        {
            enemy.TakeDamage((int)damage);
            Destroy(gameObject);
        }
    }
}
