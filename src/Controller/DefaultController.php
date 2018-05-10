<?php

namespace Drupal\annouce_tester\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class DefaultController.
 */
class DefaultController extends ControllerBase {

  /**
   * Announce.
   *
   * @return string
   *   Return Hello string.
   */
  public function announce() {
    return [
      '#attached' => [
        'library' => ['annouce_tester/annouce_test'],
      ],
      '#type' => 'markup',
      '#markup' => $this->t('Implement method: announce')
    ];
  }

}
